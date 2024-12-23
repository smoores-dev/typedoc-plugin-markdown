import { templates, partials, helpers } from './index.js';
export const resourceTemplates = (context) => {
    return {
        /**
         * Template that maps to a project document.
         */
        document: (page) => templates.document.apply(context, [page]),
        /**
         * Template that maps to the root project reflection. This will be the index page / documentation root page.
         */
        project: (page) => templates.project.apply(context, [page]),
        /**
         * Template that specifically maps to the resolved readme file. This template is not used when 'readme' is set to 'none'.
         */
        readme: (page) => templates.readme.apply(context, [page]),
        /**
         * Template that maps to individual reflection models.
         */
        reflection: (page) => templates.reflection.apply(context, [page]),
    };
};
export const resourcePartials = (context) => {
    return {
        comment: (model, options = {}) => partials.comment.apply(context, [model, options]),
        body: (model, options) => partials.body.apply(context, [model, options]),
        categories: (model, options) => partials.categories.apply(context, [model, options]),
        groups: (model, options) => partials.groups.apply(context, [model, options]),
        members: (model, options) => partials.members.apply(context, [model, options]),
        accessor: (model, options) => partials.accessor.apply(context, [model, options]),
        constructor: (model, options) => partials.constructor.apply(context, [model, options]),
        memberContainer: (model, options) => partials.memberContainer.apply(context, [model, options]),
        declaration: (model, options = {
            headingLevel: 2,
            nested: false,
        }) => partials.declaration.apply(context, [model, options]),
        declarationTitle: (model) => partials.declarationTitle.apply(context, [model]),
        documents: (model, options) => partials.documents.apply(context, [model, options]),
        enumMembersTable: (model) => partials.enumMembersTable.apply(context, [model]),
        hierarchy: (model, options) => partials.hierarchy.apply(context, [model, options]),
        indexSignature: (model) => partials.indexSignature.apply(context, [model]),
        inheritance: (model, options) => partials.inheritance.apply(context, [model, options]),
        memberTitle: (model) => partials.memberTitle.apply(context, [model]),
        /**
         * Renders a top-level member that contains group and child members such as Classes, Interfaces and Enums.
         */
        memberWithGroups: (model, options) => partials.memberWithGroups.apply(context, [model, options]),
        parametersList: (model, options) => partials.parametersList.apply(context, [model, options]),
        parametersTable: (model) => partials.parametersTable.apply(context, [model]),
        /**
     * Renders a collection of properties in a table.
    
    There is no association list partial for properties as these are handled as a standard list of members.
     */
        propertiesTable: (model, options) => partials.propertiesTable.apply(context, [model, options]),
        referenceMember: (model) => partials.referenceMember.apply(context, [model]),
        reflectionIndex: (model, options) => partials.reflectionIndex.apply(context, [model, options]),
        signature: (model, options) => partials.signature.apply(context, [model, options]),
        signatureParameters: (model) => partials.signatureParameters.apply(context, [model]),
        signatureReturns: (model, options) => partials.signatureReturns.apply(context, [model, options]),
        signatureTitle: (model, options) => partials.signatureTitle.apply(context, [model, options]),
        signatures: (model, options) => partials.signatures.apply(context, [model, options]),
        sources: (model, options) => partials.sources.apply(context, [model, options]),
        member: (model, options) => partials.member.apply(context, [model, options]),
        typeAndParent: (model) => partials.typeAndParent.apply(context, [model]),
        typeArguments: (model, options) => partials.typeArguments.apply(context, [model, options]),
        typeDeclaration: (model, options) => partials.typeDeclaration.apply(context, [model, options]),
        typeDeclarationContainer: (model, typeDeclaration, opts) => partials.typeDeclarationContainer.apply(context, [
            model,
            typeDeclaration,
            opts,
        ]),
        typeDeclarationList: (model, options) => partials.typeDeclarationList.apply(context, [model, options]),
        typeDeclarationTable: (model, options) => partials.typeDeclarationTable.apply(context, [model, options]),
        typeParametersList: (model) => partials.typeParametersList.apply(context, [model]),
        typeParametersTable: (model) => partials.typeParametersTable.apply(context, [model]),
        breadcrumbs: () => partials.breadcrumbs.apply(context, []),
        footer: () => partials.footer.apply(context, []),
        header: () => partials.header.apply(context, []),
        packagesIndex: (model) => partials.packagesIndex.apply(context, [model]),
        pageTitle: () => partials.pageTitle.apply(context, []),
        arrayType: (model) => partials.arrayType.apply(context, [model]),
        conditionalType: (model) => partials.conditionalType.apply(context, [model]),
        indexAccessType: (model) => partials.indexAccessType.apply(context, [model]),
        inferredType: (model) => partials.inferredType.apply(context, [model]),
        intersectionType: (model) => partials.intersectionType.apply(context, [model]),
        intrinsicType: (model) => partials.intrinsicType.apply(context, [model]),
        literalType: (model) => partials.literalType.apply(context, [model]),
        namedTupleType: (model) => partials.namedTupleType.apply(context, [model]),
        optionalType: (model) => partials.optionalType.apply(context, [model]),
        queryType: (model) => partials.queryType.apply(context, [model]),
        referenceType: (model) => partials.referenceType.apply(context, [model]),
        declarationType: (model, options) => partials.declarationType.apply(context, [model, options]),
        functionType: (model, options) => partials.functionType.apply(context, [model, options]),
        reflectionType: (model, options) => partials.reflectionType.apply(context, [model, options]),
        someType: (model, options) => partials.someType.apply(context, [model, options]),
        tupleType: (model) => partials.tupleType.apply(context, [model]),
        typeOperatorType: (model) => partials.typeOperatorType.apply(context, [model]),
        unionType: (model) => partials.unionType.apply(context, [model]),
        unknownType: (model) => partials.unknownType.apply(context, [model]),
    };
};
export const resourceHelpers = (context) => {
    return {
        getAngleBracket: (bracket) => helpers.getAngleBracket.apply(context, [bracket]),
        getCommentParts: (model) => helpers.getCommentParts.apply(context, [model]),
        getDeclarationType: (model) => helpers.getDeclarationType.apply(context, [model]),
        getDescriptionForComment: (comment) => helpers.getDescriptionForComment.apply(context, [comment]),
        getFlattenedDeclarations: (model, options) => helpers.getFlattenedDeclarations.apply(context, [
            model,
            options,
        ]),
        getGroupIndexList: (children) => helpers.getGroupIndexList.apply(context, [children]),
        getGroupIndexTable: (children) => helpers.getGroupIndexTable.apply(context, [children]),
        getGroupIndex: (group) => helpers.getGroupIndex.apply(context, [group]),
        getHierarchyType: (model, options) => helpers.getHierarchyType.apply(context, [model, options]),
        getKeyword: (model) => helpers.getKeyword.apply(context, [model]),
        getModifier: (model) => helpers.getModifier.apply(context, [model]),
        getParameterDefaultValue: (model) => helpers.getParameterDefaultValue.apply(context, [model]),
        getProjectName: (stringWithPlaceholders, page, includeVersion = true) => helpers.getProjectName.apply(context, [
            stringWithPlaceholders,
            page,
            includeVersion,
        ]),
        getPropertyDefaultValue: (model) => helpers.getPropertyDefaultValue.apply(context, [model]),
        getReflectionFlags: (reflectionFlags) => helpers.getReflectionFlags.apply(context, [reflectionFlags]),
        getReturnType: (model) => helpers.getReturnType.apply(context, [model]),
        hasUsefulTypeDetails: (type) => helpers.hasUsefulTypeDetails.apply(context, [type]),
        isGroupKind: (model) => helpers.isGroupKind.apply(context, [model]),
        useTableFormat: (key, reflectionKind) => helpers.useTableFormat.apply(context, [key, reflectionKind]),
    };
};
