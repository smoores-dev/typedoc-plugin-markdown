/**
 * Typedoc options declarations.
 *
 * This will be exposed to TypeDoc as a new option when bootstrapping the plugin, with the name of the option the name of the exported variable.
 *
 * The JSDoc comments will also be used in the public facing documentation.
 *
 * @categoryDescription File
 *
 * Options that are used to configure how files are output.
 *
 * @categoryDescription Display
 *
 * Options that are used to configure how the output is structured and displayed.
 *
 * @categoryDescription Utility
 *
 * Options that are used for general configuration and utility purposes.
 *
 * @module
 */
import { DeclarationOption } from 'typedoc';
/**
 * TypeDoc creates documentation according to exports derived from the given [`--entryPointsStrategy`](https://typedoc.org/options/input/#entrypointstrategy) TypeDoc configuration.
 *
 * This option provides some flexibility as to how output files are generated.
 *
 * It is also possible to further refine what members are exported to individual files with the `membersWithOwnFile` option.
 *
 * The following keys are available:
 *
 * **"members"**
 *
 * Generates an individual file for each exported module member. This is the standard behavior of the HTML theme and the default setting of the plugin.
 *
 * ```
 *   ├── README.md
 *   ├── module-a/
 *   │   ├── classes/
 *   │   │   ├── ClassA.md
 *   │   │   └── ClassB.md
 *   │   └── functions/
 *   │   │   ├── FunctionA.md
 *   │   │   └── FunctionB.md
 *   └── module-b/
 *       └── classes/
 *           ├── ClassA.md
 *           └── ClassB.md
 * ```
 *
 * **"modules"**
 *
 * Generates a single file for every Module or Namespace where all members are hoisted to a single module file. This creates a flat navigation structure and reduces the amount of files generated.
 *
 * ```
 *   ├── README.md
 *   ├── module-a.md
 *   └── module-b.md
 * ```
 *
 * @category File
 */
export declare const outputFileStrategy: Partial<DeclarationOption>;
/**
 * This option is useful when only specific types of members should be exported to a single file.
 *
 * Ignored when `--outputFileStrategy` is equal to `"modules"`
 *
 * @example ["Class", "Enum", "Interface"]
 *
 * @category File
 */
export declare const membersWithOwnFile: Partial<DeclarationOption>;
/**
 * By default output files are generated in a directory structure that mirrors the project's module hierarchy including folders for member kinds eg `classes`, `enums`, `functions` etc.
 *
 * This option will flatten the output files to a single directory as follows:
 *
 * Default output:
 *
 * ```
 *   ├── README.md
 *   ├── module-a/
 *   │   ├── classes/
 *   │   │   ├── ClassA.md
 *   │   │   └── ClassB.md
 *   │   └── functions/
 *   │   │   ├── FunctionA.md
 *   │   │   └── FunctionB.md
 *   └── module-b/
 *       └── classes/
 *           ├── ClassA.md
 *           └── ClassB.md
 * ```
 *
 * Flattened output:
 *
 * ```
 *   ├── README.md
 *   ├── module-a.Class.ClassA.md
 *   ├── module-a.Class.ClassB.md
 *   ├── module-a.Function.functionA.md
 *   ├── module-a.Function.functionB.md
 *   ├── module-b.Class.ClassA.md
 *   └── module-b.Class.ClassB.md
 * ```
 *
 * @category File
 */
export declare const flattenOutputFiles: Partial<DeclarationOption>;
/**
 * Typically Markdown files are recognised by the `.md` or `.markdown` file extensions.`.mdx` maybe required for compatibility with certain Markdown parsers.
 *
 * @example ".mdx"
 *
 * @category File
 */
export declare const fileExtension: Partial<DeclarationOption>;
/**
 * The `entryFileName` in this context is the root page of the documentation and each module directory.
 * This is essentially the equivalent to `index.html` for web pages.
 *
 * `README` is recognised when browsing folders on repos and Wikis and is the plugin default. `index` might be more suitable for static site generators.
 *
 * The content of root documentation file will be resolved in the following order:
 *
 * 1. The value of the `--entryModule` option (if defined).
 * 2. The resolved Readme file (skipped if the [`--readme`](https://typedoc.org/options/input/#readme) option is set to `none`).
 * 3. The documentation index page.
 *
 * @example "index"
 *
 * @category File
 *
 */
export declare const entryFileName: Partial<DeclarationOption>;
/**
 * Please note this option is not applicable when [`--readme`](https://typedoc.org/options/input/#readme) is set to "none" or `--mergeReadme` is set to "true".
 *
 * @example "documentation"
 *
 * @defaultValue "modules | packages | globals"
 *
 * @category File
 *
 */
export declare const modulesFileName: Partial<DeclarationOption>;
/**
 * By default when a readme file is resolved, a separate readme page is created.
 *
 * This option appends the documentation main/index page to the readme page so only a single root page is generated.
 *
 * This option has no effect when [`--readme`](https://typedoc.org/options/input/#readme) is set to `"none"`.
 *
 * @category File
 */
export declare const mergeReadme: Partial<DeclarationOption>;
/**
 * This option can be used when the root page of the documentation should be a specific module (typically a module named `index`).
 *
 * The module name should be specified (NOT the reference to the file name).
 *
 * Please note a separate modules index page will not be generated, therefore would work better if navigation is present.
 *
 * @example "index"
 *
 * @category File
 */
export declare const entryModule: Partial<DeclarationOption>;
/**
 * By default directories are split by scopes when generating file paths.
 *
 * This option will remove reference to `@scope` in the path when generating files and directories. It does not affect the name of the package or module in the output.
 *
 * The following will be the directory structure for packages named `@scope/package-1` and `@scope/package-2`:
 *
 *  Output when set to `false` (default):
 *
 * ```
 *   └──@scope/
 *       ├── package-1/
 *       └── package-2/
 * ```
 *
 * Output when set to `true`:
 *
 * ```
 *   ├── package-1/
 *   └── package-2/
 * ```
 *
 * Ignored if `flattenOutputFiles` is set to `true`.
 *
 * @category File
 */
export declare const excludeScopesInPaths: Partial<DeclarationOption>;
/**
 * @category Display
 */
export declare const hidePageHeader: Partial<DeclarationOption>;
/**
 * @category Display
 */
export declare const hideBreadcrumbs: Partial<DeclarationOption>;
/**
 * @category Display
 */
export declare const hidePageTitle: Partial<DeclarationOption>;
/**
 * By default members are grouped by kind (eg Classes, Functions etc).
 *
 * This creates a flat structure where all members are displayed at the same heading level.
 *
 * @category Display
 */
export declare const hideGroupHeadings: Partial<DeclarationOption>;
/**
 * @deprecated
 *
 * @hidden
 */
export declare const excludeGroups: Partial<DeclarationOption>;
/**
 * This option can be used to improve readability and aesthetics when defining signatures and declarations.
 *
 * Please note that when this option is set to `true` it is not possible to link to other references.
 *
 * As a work around the [`@link`](https://typedoc.org/tags/link/) tag can be be used to manually reference types.
 *
 * @category Display
 */
export declare const useCodeBlocks: Partial<DeclarationOption>;
/**
 * By default when objects have associated documentation, object declarations are collapsed to preserve space and improve readability.
 *
 * This option should be set when a full object representation is preferred.
 *
 * @category Display
 */
export declare const expandObjects: Partial<DeclarationOption>;
/**
 * By default parameters in signature definitions only display the parameter name so the output is more concise.
 *
 * This option should be set when a full type representation is preferred.
 *
 * @category Display
 */
export declare const expandParameters: Partial<DeclarationOption>;
/**
 * By default block tags (such as `@example`, `@remarks`, `@deprecated`) are rendered after "Parameters", "Returns" and "Type declaration" sections for signatures and declarations.
 *
 * The rationale is that comment block tags often contain more detailed, supplementary information and are typically secondary to understanding the primary use of the symbol,
 *
 * Use this option to preserve the position of the tag content with the comment summary.
 *
 * @example ["@example", "@deprecated"]
 *
 * @category Display
 */
export declare const blockTagsPreserveOrder: Partial<DeclarationOption>;
/**
 * This option renders index items either as a simple unordered list or in a table.
 *
 * When table style is selected the following will be the behaviour:
 *
 * - For a **members index**, a description column will be added with key `table` - the first paragraph of the comment summary, or key `htmlTable` - the entire comment contents.
 * - For a **packages index**, (when `--entryPointStrategy` equals `packages`), the package.json description will be displayed with an additional "Version" column (when `--includeVersion` equals true).
 * - For a **documents index** a description column will be added to the table printing the `"description"` frontmatter variable.
 *
 * @category Display
 */
export declare const indexFormat: Partial<DeclarationOption>;
/**
 * This option specifies the output format for parameters and type parameters of functions and class methods:
 *
 * - **"list"**: parameters are output as bullet points in a linear list, suitable for more detailed comments.
 * - **"table"**: parameters are output within a Markdown table, condensed into a single paragraph.
 * - **"htmlTable"**: parameters are output in an HTML table, enabling block elements to render in table cells.
 *
 * @category Display
 */
export declare const parametersFormat: Partial<DeclarationOption>;
/**
 * This option specifies the output format for interface properties:
 *
 * - **"list"**: properties are output in linear blocks with headings, suitable for more detailed comments.
 * - **"table"**: properties are output within a Markdown table, condensed into a single paragraph.
 * - **"htmlTable"**: properties are output in an HTML table, enabling block elements to render in tabular format.
 *
 * @category Display
 */
export declare const interfacePropertiesFormat: Partial<DeclarationOption>;
/**
 * This option specifies the output format for class properties:
 *
 * - **"list"**: properties are output in linear blocks with headings, suitable for more detailed comments.
 * - **"table"**: properties are output within a Markdown table, condensed into a single paragraph.
 * - **"htmlTable"**: properties are output in an HTML table, enabling block elements to render in tabular format.
 *
 * @category Display
 */
export declare const classPropertiesFormat: Partial<DeclarationOption>;
/**
 * This option specifies the output format for enumeration members:
 *
 * - **"list"**: members are output in linear blocks with headings, suitable for more detailed comments.
 * - **"table"**: members are output within a Markdown table, condensed into a single paragraph.
 * - **"htmlTable"**: members are output in an HTML table, enabling block elements to render in tabular format.
 *
 * @category Display
 */
export declare const enumMembersFormat: Partial<DeclarationOption>;
/**
 * This option will handle the formatting of object literals assigned as properties in classes or interfaces.
 *
 * Note this options will only take effect when the property declaration is rendered in a `list` format.
 *
 * - **"list"**: members are output in linear blocks with headings, suitable for more detailed comments.
 * - **"table"**: members are output within a Markdown table, condensed into a single paragraph.
 * - **"htmlTable"**: members are output in an HTML table, enabling block elements to render in tabular format.
 *
 * @category Display
 */
export declare const propertyMembersFormat: Partial<DeclarationOption>;
/**
 * This option specifies the output format for type declaration of variables and type aliases.
 *
 * - **"list"**: declarations are output in linear blocks with headings, suitable for more detailed comments.
 * - **"table"**: declarations are output within a Markdown table, condensed into a single paragraph.
 * - **"htmlTable"**: declarations are output in an HTML table, enabling block elements to render in tabular format.
 *
 * @category Display
 */
export declare const typeDeclarationFormat: Partial<DeclarationOption>;
/**
 * Configures the visibility level for type declaration documentation. Applies to both list and table formats.
 *
 * - **"verbose"**: Provides full documentation details for all type declarations, including nested types.
 * - **"compact"**: Summarizes nested types as JSON, reducing verbosity while retaining key information.
 *
 * @category Display
 */
export declare const typeDeclarationVisibility: Partial<DeclarationOption>;
/**
 * @hidden
 *
 * @deprecated This option has been deprecated in favour of `--interfacePropertiesFormat` and `--classPropertiesFormat`.
 *
 * @category Display
 */
export declare const propertiesFormat: Partial<DeclarationOption>;
/**
 * By default, all available data for symbols are displayed in table columns which can result in several columns in certain use-cases.
 *
 * This option allows you to control the visibility of columns, prioritizing readability over displaying complete data.
 * In addition you can control the alignment of the header text.
 *
 * @category Display
 */
export declare const tableColumnSettings: Partial<DeclarationOption>;
/**
 * This plugin generates well-formatted Markdown, however, integrating the popular formatting package [Prettier](https://prettier.io/) can provide additional enhancements, such as:
 *
 * - Formats code inside fenced blocks using the respective Prettier configuration for that language.
 * - Aligns markdown table cells.
 * - Removes unnecessary escape characters.
 * - Wraps long lines of text to fit within a configurable line width.
 *
 * Please note that Prettier is not a dependency of this plugin and must be installed in your project for this option to work.
 *
 * `npm i prettier --save-dev` to use this option.
 *
 * @category Utility
 */
export declare const formatWithPrettier: Partial<DeclarationOption>;
/**
 * By default Prettier uses the options resolved from a discovered Prettier [configuration file](https://prettier.io/docs/en/configuration.html).
 *
 * Use this option to specify a separate Prettier configuration file in a custom location.
 *
 * Please note this option is only applicable when `formatWithPrettier` is set to `"true"`.
 *
 * @example "./path/to/.prettierrc.json"
 *
 * @category Utility
 */
export declare const prettierConfigFile: Partial<DeclarationOption>;
/**
 * *Please note this options does not affect the rendering of inline code or code blocks (using single/triple backticks).*
 *
 * By default all comments written inside JsDoc comments will be passed to the output as written, and parsers will interpret un-escaped angle brackets as HTML/JSX tags..
 *
 * This option will escape angle brackets `<` `>` and curly braces `{` `}` written inside JsDoc comments.
 *
 * This option would typically be used when source code comes from an external source exposing the following potential issues:
 *
 * - Comments contain raw tags that should be interpreted as code examples.
 * - Comments contain invalid syntax that (in the case of MDX) will cause breaking parsing errors.
 * - Although most parsers use XSS filters, this option provides an additional layer of XSS security.
 *
 * @category Utility
 */
export declare const sanitizeComments: Partial<DeclarationOption>;
/**
 * If undefined all urls will be relative.
 *
 * @example "http://abc.com"
 *
 * @category Utility
 */
export declare const publicPath: Partial<DeclarationOption>;
/**
 * This option should be used when parsers require a custom anchor prefix.
 *
 * @example "markdown-header"
 *
 * @category Utility
 */
export declare const anchorPrefix: Partial<DeclarationOption>;
/**
 * By default, opening and closing angle brackets (`<` and `>`) are escaped using backslashes, and most modern Markdown processors handle them consistently.
 * However, using HTML entities (`&lt;` and `&gt;`) might be preferable to avoid any inconsistencies with some Markdown processors.
 *
 * @category Utility
 */
export declare const useHTMLEncodedBrackets: Partial<DeclarationOption>;
/**
 * This option should be used if there are issues when anchoring to symbols within a page.
 *
 * - For Markdown parsers that do not automatically assign header ids.
 * - When cross referencing symbols that are referenced in a table row.
 *
 * @category Utility
 */
export declare const useHTMLAnchors: Partial<DeclarationOption>;
/**
 * By default references to symbol anchor links are lowercased.
 *
 * This option can be used for engines that require the preservation of anchor link casing.
 *
 * @category Utility
 */
export declare const preserveAnchorCasing: Partial<DeclarationOption>;
/**
 * @hidden
 *
 * @deprecated This option has been deprecated in favour of `--pageTitleTemplates`.
 *
 * @category Utility
 */
export declare const textContentMappings: Partial<DeclarationOption>;
/**
 * Customizes the page titles for index, module, and member pages in the documentation.
 *
 * The option is provided as an object with keys corresponding to the page type.
 *
 * The Values of each key can be either:
 *
 * - A function accepting input arguments.
 * - A strings supporting placeholders.
 *
 * Available placeholders / arguments:
 *
 * - `{projectName}` - the project's name resolved by TypeDoc.
 * - `{version}` - the project version  resolved by TypeDoc (when includeVersion is `true`).
 * - `{kind}` - the reflection kind of the item.
 * - `{group}` - the group title that the item belongs to.
 *
 * Available keys:
 *
 * - The `index` key (main documentation index page) accepts the `projectName` and `version` placeholder/args.
 * - The `module` key (module and namespace pages) accepts the `kind` and `name` placeholder/args.
 * - The `member` key (individual module member pages) accepts the `kind`, `name`, and `group` placeholder/args.
 *
 * ```js filename="typedoc.cjs"
 * pageTitleTemplates: {
 *  index: (args) => `${args.projectName}: ${args.version}`,
 *  module: (args) => args.name,
 *  member: (args) => `${args.kind}: ${args.name}`,
 * }
 * ```
 *
 * @category Utility
 */
export declare const pageTitleTemplates: Partial<DeclarationOption>;
/**
 * @deprecated
 *
 * @hidden
 */
export declare const navigationModel: Partial<DeclarationOption>;
