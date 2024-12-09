import { MarkdownPageEvent } from '../events/index.js';
import { NavigationItem, RenderTemplate, UrlMapping } from '../types/index.js';
import { ProjectReflection, Reflection } from 'typedoc';
/**
 * An event emitted at the beginning and end of the rendering process.
 *
 * @event
 */
export declare class MarkdownRendererEvent extends Event {
    /**
     * The project the renderer is currently processing.
     */
    readonly project: ProjectReflection;
    /**
     * The path of the directory the documentation should be written to.
     */
    readonly outputDirectory: string;
    /**
     * A list of all pages that should be generated.
     */
    urls?: UrlMapping<Reflection>[];
    /**
     * The navigation structure of the project that can be utilised by plugins.
     */
    navigation?: NavigationItem[];
    /**
     * Triggered before the renderer starts rendering a project.
     * @event
     */
    static readonly BEGIN = "beginRender";
    /**
     * Triggered after the renderer has written all documents.
     * @event
     */
    static readonly END = "endRender";
    /**
     * @ignore
     */
    constructor(name: string, outputDirectory: string, project: ProjectReflection);
    /**
     * @ignore
     */
    createPageEvent<Model>(mapping: UrlMapping<Model>): [RenderTemplate<MarkdownPageEvent<Model>>, MarkdownPageEvent<Model>];
}
