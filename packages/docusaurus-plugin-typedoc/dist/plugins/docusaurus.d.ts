import { PluginOptions } from '../models.js';
export default function pluginDocusaurus(context: any, opts: Partial<PluginOptions>): Promise<{
    name: string;
    extendCli(cli: any): void;
}>;
