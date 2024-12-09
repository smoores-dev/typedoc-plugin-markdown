import { unEscapeChars } from '../../libs/utils/index.js';
export function codeBlock(content) {
    const trimLastLine = (content) => {
        const lines = content.split('\n');
        return lines
            .map((line, index) => (index === lines.length - 1 ? line.trim() : line))
            .join('\n');
    };
    const trimmedContent = content.endsWith('}') ||
        content.endsWith('};') ||
        content.endsWith('>') ||
        content.endsWith('>;')
        ? trimLastLine(content)
        : content;
    return '```ts\n' + unEscapeChars(trimmedContent) + '\n```';
}
