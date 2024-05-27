import { Event, ProjectReflection, Reflection } from 'typedoc';

/**
 * An event emitted by before and after the markup of a page is rendered.
 *
 * @example
 *
 * ```ts
 * export function load(app: MarkdownApplication) {
 *   app.renderer.on(MarkdownPageEvent.BEGIN, (page: MarkdownPageEvent) => {
 *    page.contents = page.contents.replace('foo', 'bar');
 *   });
 * });
 * ```
 *
 */
export class MarkdownPageEvent<
  /** @ignore **/ Model = Reflection,
> extends Event {
  /**
   * The {@linkcode typedoc!ProjectReflection ProjectReflection} instance the renderer is currently processing.
   */
  project!: ProjectReflection;

  /**
   * The model that that is being rendered on this page.
   * Either a {@linkcode typedoc!DeclarationReflection DeclarationReflection} or {@linkcode typedoc!ProjectReflection ProjectReflection}.
   */
  readonly model: Model;

  /**
   * The final markdown `string` content of the page.
   *
   * Should be rendered by layout templates and can be modified by plugins.
   */
  contents?: string;

  /**
   * The url `string` of the page.
   */
  url!: string;

  /**
   * The complete `string` filename where the file will be written..
   */
  filename!: string;

  /**
   * The frontmatter of this page represented as a key value object. This property can be utilised by other plugins.
   */
  frontmatter?: Record<string, any>;

  /**
   * This is required for typing purposes but is unused in the Markdown theme.
   * @hidden
   */
  pageHeadings: any;

  /**
   * Triggered before a document will be rendered.
   * @event
   */
  static readonly BEGIN = 'beginPage';

  /**
   * Triggered after a document has been rendered, just before it is written to disc.
   * @event
   */
  static readonly END = 'endPage';

  /**
   * @ignore
   */
  constructor(name: string, model: Model) {
    super(name);
    this.model = model;
  }
}
