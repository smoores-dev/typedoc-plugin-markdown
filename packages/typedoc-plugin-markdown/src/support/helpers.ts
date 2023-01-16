import {
  ContainerReflection,
  DeclarationReflection,
  ProjectReflection,
  ReflectionKind,
  SignatureReflection,
} from 'typedoc';

/**
 * Determines if current signature is a constructor
 */
export const isConstructor = (
  signature: DeclarationReflection | SignatureReflection,
) => {
  return signature.parent?.kindOf(ReflectionKind.Constructor);
};

export function getIndexHeadingLevel(
  reflection: DeclarationReflection | ProjectReflection,
) {
  if (!reflection.kindString) {
    return 2;
  }
  return reflection.hasOwnDocument ? 2 : 3;
}

export function getGroupHeadingLevel(container: ContainerReflection) {
  if (container.kindOf([ReflectionKind.Module, ReflectionKind.Namespace])) {
    return 2;
  }
  return container.hasOwnDocument ? 3 : 4;
}

export function getReflectionHeadingLevel(
  reflection: DeclarationReflection | SignatureReflection,
) {
  if (reflection.kindOf(ReflectionKind.Constructor)) {
    return reflection.parent?.hasOwnDocument ? 4 : 5;
  }

  if (
    reflection.kindOf([
      ReflectionKind.Class,
      ReflectionKind.Interface,
      ReflectionKind.Function,
      ReflectionKind.TypeAlias,
      ReflectionKind.Variable,
      ReflectionKind.Enum,
    ])
  ) {
    return reflection.parent?.hasOwnDocument ? 2 : 3;
  }
  return reflection.parent?.hasOwnDocument ? 4 : 5;
}

export function getMemberHeadingLevel(
  reflection: DeclarationReflection | SignatureReflection,
) {
  return getReflectionHeadingLevel(reflection) + 1;
}