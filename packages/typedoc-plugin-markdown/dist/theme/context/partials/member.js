import { ReferenceReflection, ReflectionKind, } from 'typedoc';
export function member(model, options) {
    if ([
        ReflectionKind.Class,
        ReflectionKind.Interface,
        ReflectionKind.Enum,
    ].includes(model.kind)) {
        return this.partials.memberWithGroups(model, {
            headingLevel: options.headingLevel + 1,
        });
    }
    if (model.kind === ReflectionKind.Constructor) {
        return this.partials.constructor(model, {
            headingLevel: options.headingLevel,
        });
    }
    if (model.kind === ReflectionKind.Accessor) {
        return this.partials.accessor(model, {
            headingLevel: options.headingLevel + 1,
        });
    }
    if (model.signatures) {
        return this.partials.signatures(model, {
            headingLevel: options.headingLevel,
            nested: options.nested,
        });
    }
    if (model instanceof ReferenceReflection) {
        return this.partials.referenceMember(model);
    }
    return this.partials.declaration(model, {
        headingLevel: options.headingLevel + 1,
        nested: options.nested,
    });
}
