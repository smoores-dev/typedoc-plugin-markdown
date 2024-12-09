import { heading } from '../../../libs/markdown/index.js';
import { ReflectionKind } from 'typedoc';
export function accessor(model, options) {
    const md = [];
    if (model.getSignature) {
        md.push(heading(options.headingLevel, this.internationalization.proxy.kind_get_signature()));
        md.push(this.partials.signatureTitle(model.getSignature, {
            accessor: 'get',
        }));
        if (model.getSignature.comment) {
            md.push(this.partials.comment(model.getSignature.comment, {
                headingLevel: options.headingLevel + 1,
            }));
        }
        if (model.getSignature?.type) {
            md.push(this.partials.signatureReturns(model.getSignature, {
                headingLevel: options.headingLevel + 1,
            }));
        }
    }
    if (model.setSignature) {
        md.push(heading(options.headingLevel, this.internationalization.proxy.kind_set_signature()));
        md.push(this.partials.signatureTitle(model.setSignature, {
            accessor: 'set',
        }));
        if (model.setSignature.comment) {
            md.push(this.partials.comment(model.setSignature.comment, {
                headingLevel: options.headingLevel + 1,
            }));
        }
        if (model.setSignature?.parameters?.length) {
            md.push(heading(options.headingLevel + 1, this.internationalization.kindPluralString(ReflectionKind.Parameter)));
            if (this.helpers.useTableFormat('parameters')) {
                md.push(this.partials.parametersTable(model.setSignature.parameters));
            }
            else {
                md.push(this.partials.parametersList(model.setSignature.parameters, {
                    headingLevel: options.headingLevel + 1,
                }));
            }
        }
        if (model.setSignature?.type) {
            md.push(this.partials.signatureReturns(model.setSignature, {
                headingLevel: options.headingLevel + 1,
            }));
        }
    }
    if (model.comment) {
        md.push(this.partials.comment(model.comment, {
            headingLevel: options.headingLevel,
        }));
    }
    md.push(this.partials.inheritance(model, { headingLevel: options.headingLevel }));
    const showSources = model?.parent?.kind !== ReflectionKind.TypeLiteral;
    if (showSources && !this.options.getValue('disableSources')) {
        if (model.getSignature?.sources) {
            md.push(this.partials.sources(model.getSignature, {
                headingLevel: options.headingLevel,
            }));
        }
        else if (model.setSignature?.sources) {
            md.push(this.partials.sources(model.setSignature, {
                headingLevel: options.headingLevel,
            }));
        }
        else {
            md.push(this.partials.sources(model, { headingLevel: options.headingLevel }));
        }
    }
    return md.join('\n\n');
}
