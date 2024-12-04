[Developer Guide](../../../../README.md) / [typedoc-plugin-markdown](../../../README.md) / [options](../../README.md) / constants

# constants

Contains constant default values used in options.

## Contents

* [ALLOWED\_OWN\_FILE\_MEMBERS](#allowed_own_file_members)
* [TEXT\_CONTENT\_MAPPINGS](#text_content_mappings)
* [DEFAULT\_PAGE\_TITLES](#default_page_titles)

## ALLOWED\_OWN\_FILE\_MEMBERS

> `const` **ALLOWED\_OWN\_FILE\_MEMBERS**: `string`\[]

Default values for `membersWithOwnFile` option.

### Default Value

```ts
[
    ReflectionKind[ReflectionKind.Enum],
    ReflectionKind[ReflectionKind.Variable],
    ReflectionKind[ReflectionKind.Function],
    ReflectionKind[ReflectionKind.Class],
    ReflectionKind[ReflectionKind.Interface],
    ReflectionKind[ReflectionKind.TypeAlias],
]
```

### Defined in

[packages/typedoc-plugin-markdown/src/options/constants.ts:12](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/constants.ts#L12)

***

## TEXT\_CONTENT\_MAPPINGS

> `const` **TEXT\_CONTENT\_MAPPINGS**: `object`

Default values for `textContentMappings` option.

### Type declaration

| Name               | Type     | Default value               |
| ------------------ | -------- | --------------------------- |
| `header.title`     | `string` | '\{projectName} \{version}' |
| `breadcrumbs.home` | `string` | '\{projectName} \{version}' |
| `title.indexPage`  | `string` | '\{projectName} \{version}' |
| `title.memberPage` | `string` | '\{kind}: \{name}'          |
| `title.modulePage` | `string` | '\{name}'                   |

### Defined in

[packages/typedoc-plugin-markdown/src/options/constants.ts:24](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/constants.ts#L24)

***

## DEFAULT\_PAGE\_TITLES

> `const` **DEFAULT\_PAGE\_TITLES**: `object`

### Type declaration

| Name     | Type     | Default value               |
| -------- | -------- | --------------------------- |
| `index`  | `string` | '\{projectName} \{version}' |
| `member` | `string` | '\{kind}: \{name}'          |
| `module` | `string` | '\{name}'                   |

### Defined in

[packages/typedoc-plugin-markdown/src/options/constants.ts:32](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/constants.ts#L32)
