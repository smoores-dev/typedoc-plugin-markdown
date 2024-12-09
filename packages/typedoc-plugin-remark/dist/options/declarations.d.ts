import { DeclarationOption } from 'typedoc';
/**
 * You can provide any compatible [remark plugins](https://github.com/remarkjs/remark/blob/main/doc/plugins.md) or you can write your own and reference locally.
 *
 * Each required plugin should be individually installed.
 *
 * Options can be passed either as an array of strings or an array of string / options.
 *
 * Please note that `remark-frontmatter`, `remark-gfm`, and `remark-mdx` are always included by default.
 *
 * @example  ["unified-prettier","remark-github", ["remark-toc", { "maxDepth": 3 }] ]
 */
export declare const remarkPlugins: Partial<DeclarationOption>;
/**
 * Under the hood, the `remark-stringify` plugin is used to serialize the markdown into final output.
 *
 * You can pass in options to the `remark-stringify` plugin using this option.
 *
 * Please see https://github.com/remarkjs/remark/tree/main/packages/remark-stringify#options
 *
 * @example {  "bullet": "+", "fence": "~" }
 */
export declare const remarkStringifyOptions: Partial<DeclarationOption>;
