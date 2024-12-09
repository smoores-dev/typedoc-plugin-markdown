import { backTicks, link } from '../../../libs/markdown/index.js';
import { escapeChars } from '../../../libs/utils/escape-chars.js';
import * as fs from 'fs';
export function getCommentParts(model) {
    const md = [];
    for (const part of model) {
        switch (part.kind) {
            case 'text':
                md.push(part.text);
                break;
            case 'code':
                md.push(part.text);
                break;
            case 'inline-tag':
                switch (part.tag) {
                    case '@label':
                    case '@inheritdoc':
                        break;
                    case '@link':
                    case '@linkcode':
                    case '@linkplain': {
                        if (part.target) {
                            const url = getUrl(part);
                            if (url) {
                                if (part.tag === '@linkcode') {
                                    md.push(`${link(backTicks(part.text), this.getRelativeUrl(url))}`);
                                }
                                else {
                                    md.push(`${link(escapeChars(part.text), this.getRelativeUrl(url))}`);
                                }
                            }
                            else {
                                md.push(escapeChars(part.text));
                            }
                        }
                        else {
                            md.push(escapeChars(part.text));
                        }
                        break;
                    }
                    default:
                        md.push(`{${part.tag} ${part.text}}`);
                        break;
                }
                break;
            case 'relative-link':
                switch (typeof part.target) {
                    case 'number': {
                        const refl = this.page.project.files.resolve(part.target, this.page.model.project);
                        let url;
                        if (typeof refl === 'object' && refl.url) {
                            url = this.getRelativeUrl(refl.url);
                        }
                        else {
                            const fileName = this.page.project.files.getName(part.target);
                            if (fileName) {
                                url = this.getRelativeUrl(`_media/${fileName}`);
                            }
                        }
                        if (url) {
                            md.push(url);
                            break;
                        }
                    }
                    // fall through
                    case 'undefined':
                        md.push(part.text);
                        break;
                }
                break;
            default:
                md.push('');
        }
    }
    return md.join('');
}
function getUrl(part) {
    if (part.target.url) {
        return part.target.url;
    }
    if (part.target?.parent?.url) {
        return part.target?.parent?.url;
    }
    return typeof part.target === 'string' ? part.target : '';
}
export function isFile(file) {
    try {
        return fs.statSync(file).isFile();
    }
    catch {
        return false;
    }
}
