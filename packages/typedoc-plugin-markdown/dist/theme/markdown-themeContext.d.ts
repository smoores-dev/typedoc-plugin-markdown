import { MarkdownPageEvent } from '../events/index.js';
import { MarkdownTheme } from '../theme/index.js';
import { MarkdownRenderer, PackageMetaData } from '../types/index.js';
import { Internationalization, Options, Reflection } from 'typedoc';
/**
 * The theme context class that is provided as context on the rendering of every page.
 *
 * It is heavily influenced by the equivalent [DefaultThemeRenderContext](https://typedoc.org/api/classes/DefaultThemeRenderContext.html) from the default theme.
 *
 * This class can be used to customize the theme output by extending the class and overriding the templates, partials and helpers.
 *
 * @groupDescription Properties
 *
 * Properties are passed into the constructor and are used to provide context to the theme.
 *
 * @groupDescription Methods
 *
 * General context aware helper methods not bound to any specific models that can be used by the theme resources.
 *
 * @groupDescription Resources
 *
 * Theme resources are the main building blocks for the theme context. They are split into three namespaces: `templates`, `partials` and `helpers`.
 *
 * @privateRemarks
 *
 * In order to create cleaner code, internally individual templates located in the `resources/templates` directory are bound to the this.
 *
 * @group Theme Classes
 *
 * @internal
 */
export declare class MarkdownThemeContext {
    /**
     * The theme instance.
     */
    private theme;
    /**
     * The current page event.
     */
    readonly page: MarkdownPageEvent<Reflection>;
    /**
     * The options provided to the application.
     */
    readonly options: Options;
    internationalization: Internationalization.Internationalization;
    i18n: Internationalization.TranslationProxy;
    /**
     *
     */
    constructor(
    /**
     * The theme instance.
     */
    theme: MarkdownTheme, 
    /**
     * The current page event.
     */
    page: MarkdownPageEvent<Reflection>, 
    /**
     * The options provided to the application.
     */
    options: Options);
    /**
     * Holds meta data for individual packages (if entryPointStrategy equals `packages`).
     *
     * This is required for generating package specific documentation.
     */
    private packagesMetaData;
    /**
     *  Then `templates` namespace holds the main templates for the theme and are mapped to single pages and configured in the MarkdownTheme.
     *
     * All templates return a string that is passed back to the renderer. Internally templates call partials and helpers.
     *
     * @group Resources
     */
    templates: {
        document: (page: MarkdownPageEvent<import("typedoc").DocumentReflection>) => string;
        project: (page: MarkdownPageEvent<import("typedoc").ProjectReflection>) => string;
        readme: (page: MarkdownPageEvent<import("typedoc").ProjectReflection>) => string;
        reflection: (page: MarkdownPageEvent<import("typedoc").DeclarationReflection>) => string;
    };
    /** The `partials` namespace holds the partials for the theme and are used by templates to map speficic models to page output.
     *
     * Please note that partials::
     *
     * - Take a `model` param (that references a specific TypeDoc model) and an `options` param if required.
     * - Can call other partials and helpers.
     * - Must return a string.
     *
     * Partials are categorised by their use:
     *
     * - Page Partials: Partials that render core page elements such as header and breadcrumbs.
     * - Container Partials: Partials that are used to render reflection groups and categories.
     * - Member Partials: Partials that render specific parts of reflections.
     * - Comment Partials: Partials that render comments.
     * - Type Partials: Partials that render specific TypeDoc model types.
     *
     * @group Resources
     **/
    partials: {
        comment: (model: import("typedoc").Comment, options?: {
            headingLevel?: number | undefined;
            showSummary?: boolean | undefined;
            showTags?: boolean | undefined;
            showReturns?: boolean | undefined;
            isTableColumn?: boolean | undefined;
        }) => string;
        body: (model: import("typedoc").ContainerReflection, options: {
            headingLevel: number;
        }) => string;
        categories: (model: import("typedoc").ReflectionCategory[], options: {
            headingLevel: number;
        }) => string;
        groups: (model: import("typedoc").ReflectionGroup[], options: {
            headingLevel: number;
            kind: import("typedoc").ReflectionKind;
        }) => string;
        members: (model: import("typedoc").DeclarationReflection[], options: {
            headingLevel: number;
            groupTitle?: string | undefined;
        }) => string;
        accessor: (model: import("typedoc").DeclarationReflection, options: {
            headingLevel: number;
        }) => string;
        constructor: (model: import("typedoc").DeclarationReflection, options: {
            headingLevel: number;
        }) => string;
        memberContainer: (model: import("typedoc").DeclarationReflection, options: {
            headingLevel: number;
            nested?: boolean | undefined;
            groupTitle?: string | undefined;
        }) => string;
        declaration: (model: import("typedoc").DeclarationReflection, options?: {
            headingLevel: number;
            nested?: boolean | undefined;
        }) => string;
        declarationTitle: (model: import("typedoc").DeclarationReflection) => string;
        documents: (model: import("typedoc").ProjectReflection | import("typedoc").DeclarationReflection | import("typedoc").ContainerReflection, options: {
            headingLevel: number;
        }) => string;
        enumMembersTable: (model: import("typedoc").DeclarationReflection[]) => string;
        hierarchy: (model: import("typedoc").DeclarationHierarchy, options: {
            headingLevel: number;
        }) => string;
        indexSignature: (model: import("typedoc").SignatureReflection) => string;
        inheritance: (model: import("typedoc").DeclarationReflection | import("typedoc").SignatureReflection, options: {
            headingLevel: number;
        }) => string;
        memberTitle: (model: import("typedoc").DeclarationReflection) => string;
        memberWithGroups: (model: import("typedoc").DeclarationReflection, options: {
            headingLevel: number;
        }) => string;
        parametersList: (model: import("typedoc").ParameterReflection[], options: {
            headingLevel: number;
        }) => string;
        parametersTable: (model: import("typedoc").ParameterReflection[]) => string;
        propertiesTable: (model: import("typedoc").DeclarationReflection[], options?: {
            isEventProps: boolean;
        } | undefined) => string;
        referenceMember: (model: import("typedoc").ReferenceReflection) => string;
        reflectionIndex: (model: import("typedoc").ProjectReflection | import("typedoc").DeclarationReflection, options: {
            headingLevel: number;
        }) => string;
        signature: (model: import("typedoc").SignatureReflection, options: {
            headingLevel: number;
            nested?: boolean | undefined;
            accessor?: string | undefined;
            multipleSignatures?: boolean | undefined;
        }) => string;
        signatureParameters: (model: import("typedoc").ParameterReflection[]) => string;
        signatureReturns: (model: import("typedoc").SignatureReflection, options: {
            headingLevel: number;
        }) => string;
        signatureTitle: (model: import("typedoc").SignatureReflection, options?: {
            accessor?: string | undefined;
            includeType?: boolean | undefined;
        } | undefined) => string;
        signatures: (model: import("typedoc").DeclarationReflection, options: {
            headingLevel: number;
            nested?: boolean | undefined;
        }) => string;
        sources: (model: import("typedoc").DeclarationReflection | import("typedoc").SignatureReflection, options: {
            headingLevel: number;
        }) => string;
        member: (model: import("typedoc").DeclarationReflection, options: {
            headingLevel: number;
            nested?: boolean | undefined;
        }) => string;
        typeAndParent: (model: import("typedoc").ArrayType | import("typedoc").ReferenceType) => string;
        typeArguments: (model: import("typedoc").SomeType[], options?: {
            forceCollapse?: boolean | undefined;
        } | undefined) => string;
        typeDeclaration: (model: import("typedoc").DeclarationReflection, options: {
            headingLevel: number;
            allowSource?: boolean | undefined;
        }) => string;
        typeDeclarationContainer: (model: import("typedoc").DeclarationReflection, typeDeclaration: import("typedoc").DeclarationReflection, opts: {
            headingLevel: number;
            nested?: boolean | undefined;
        }) => string;
        typeDeclarationList: (model: import("typedoc").DeclarationReflection[], options: {
            headingLevel: number;
        }) => string;
        typeDeclarationTable: (model: import("typedoc").DeclarationReflection[], options: {
            kind?: import("typedoc").ReflectionKind | undefined;
        }) => string;
        typeParametersList: (model: import("typedoc").TypeParameterReflection[]) => string;
        typeParametersTable: (model: import("typedoc").TypeParameterReflection[]) => string;
        breadcrumbs: () => string;
        footer: () => string;
        header: () => string;
        packagesIndex: (model: import("typedoc").ProjectReflection) => string;
        pageTitle: () => string;
        arrayType: (model: import("typedoc").ArrayType) => string;
        conditionalType: (model: import("typedoc").ConditionalType) => string;
        indexAccessType: (model: import("typedoc").IndexedAccessType) => string;
        inferredType: (model: import("typedoc").InferredType) => string;
        intersectionType: (model: import("typedoc").IntersectionType) => string;
        intrinsicType: (model: import("typedoc").IntrinsicType) => string;
        literalType: (model: import("typedoc").LiteralType) => string;
        namedTupleType: (model: import("typedoc").NamedTupleMember) => string;
        optionalType: (model: import("typedoc").OptionalType) => string;
        queryType: (model: import("typedoc").QueryType) => string;
        referenceType: (model: import("typedoc").ReferenceType) => string;
        declarationType: (model: import("typedoc").DeclarationReflection, options?: {
            forceCollapse?: boolean | undefined;
        } | undefined) => string;
        functionType: (model: import("typedoc").SignatureReflection[], options?: {
            forceParameterType: boolean;
        } | undefined) => string;
        reflectionType: (model: import("typedoc").ReflectionType, options?: {
            forceCollapse?: boolean | undefined;
        } | undefined) => string;
        someType: (model?: import("typedoc").SomeType | undefined, options?: {
            forceCollapse?: boolean | undefined;
        } | undefined) => string;
        tupleType: (model: import("typedoc").TupleType) => string;
        typeOperatorType: (model: import("typedoc").TypeOperatorType) => string;
        unionType: (model: import("typedoc").UnionType) => string;
        unknownType: (model: import("typedoc").UnknownType) => string;
    };
    /**
     * The `helpers` namespace holds the helpers for the theme and are smaller utility functions that return snippets or text or other data transformations.
     *
     * Please note that partials:
     *
     * - Take a `model` param (that references a specific TypeDoc model) and an `options` param if required.
     * - Can reference other helpers but should not reference partials.
     * - Can return strings or other models.
     *
     * @group Resources
     */
    helpers: {
        getAngleBracket: (bracket: "<" | ">") => string;
        getCommentParts: (model: import("typedoc").CommentDisplayPart[]) => string;
        getDeclarationType: (model: import("typedoc").DeclarationReflection) => import("typedoc").SomeType | undefined;
        getDescriptionForComment: (comment: import("typedoc").Comment) => string | null;
        getFlattenedDeclarations: (model: import("typedoc").DeclarationReflection[], options?: {
            includeSignatures: boolean;
        } | undefined) => import("typedoc").DeclarationReflection[];
        getGroupIndexList: (children: import("typedoc").DeclarationReflection[] | import("typedoc").DocumentReflection[]) => string;
        getGroupIndexTable: (children: import("typedoc").DeclarationReflection[] | import("typedoc").DocumentReflection[]) => string;
        getGroupIndex: (group: import("typedoc").ReflectionCategory | import("typedoc").ReflectionGroup) => any;
        getHierarchyType: (model: import("typedoc").SomeType, options?: {
            isTarget: boolean;
        } | undefined) => string;
        getKeyword: (model: import("typedoc").ReflectionKind) => string;
        getModifier: (model: import("typedoc").DeclarationReflection) => string | null;
        getParameterDefaultValue: (model: import("typedoc").ParameterReflection) => string;
        getProjectName: (stringWithPlaceholders: string, page: MarkdownPageEvent<Reflection>, includeVersion?: boolean) => string;
        getPropertyDefaultValue: (model: import("typedoc").DeclarationReflection) => string | null;
        getReflectionFlags: (reflectionFlags: import("typedoc").ReflectionFlags) => string;
        getReturnType: (model?: import("typedoc").SomeType | undefined) => string;
        hasUsefulTypeDetails: (type: import("typedoc").SomeType) => boolean;
        isGroupKind: (model: import("typedoc").DeclarationReflection | import("typedoc").SignatureReflection) => boolean;
        useTableFormat: (key: "properties" | "parameters" | "enums" | "typeDeclarations" | "propertyMembers", reflectionKind?: import("typedoc").ReflectionKind | undefined) => boolean;
    };
    /**
     * Returns the package meta data for a given package name when entrypointStrategy is set to `packages`.
     *
     * @param packageName - The package name as per `name` field from `package.json`.
     *
     * @internal
     */
    getPackageMetaData(packageName: string): PackageMetaData | undefined;
    /**
     * Returns the relative URL (from the current page context url).
     *
     * If public path is set, it will be used as the base URL.
     *
     * @param url - The URL to make relative.
     * @param ignorePublicPath - Whether to ignore the public path.
     */
    getRelativeUrl(url: string, ignorePublicPath?: boolean): string;
    /**
     * Hook into the TypeDoc rendering system.
     *
     * @internal
     */
    hook: MarkdownRenderer['markdownHooks']['emit'];
}
