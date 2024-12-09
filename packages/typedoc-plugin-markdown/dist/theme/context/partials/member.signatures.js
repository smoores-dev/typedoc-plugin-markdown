import { heading } from '../../../libs/markdown/index.js';
export function signatures(model, options) {
    const md = [];
    const multipleSignatures = model.signatures && model.signatures?.length > 1;
    if (model.comment && multipleSignatures) {
        md.push(this.partials.comment(model.comment, {
            headingLevel: options.headingLevel + 1,
        }));
    }
    if (multipleSignatures && model.documents) {
        md.push(this.partials.documents(model, {
            headingLevel: options.headingLevel + 1,
        }));
    }
    model.signatures?.forEach((signature) => {
        if (multipleSignatures) {
            md.push(heading(options.headingLevel + 1, this.i18n.kind_call_signature()));
        }
        md.push(this.partials.signature(signature, {
            headingLevel: multipleSignatures
                ? options.headingLevel + 2
                : options.headingLevel + 1,
            nested: options.nested,
            multipleSignatures,
        }));
    });
    return md.join('\n\n');
}
