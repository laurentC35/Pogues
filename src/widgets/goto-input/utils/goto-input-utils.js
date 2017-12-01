import { getComponentsTargetsByComponent, getComponentsTargetsByPosition } from 'utils/model/redirections-utils';

export function getTargets(componentsStore, selectedTarget, editingComponentId, componentType) {
  let allowedTargets;

  if (editingComponentId !== '') {
    // When a component is been edited.
    allowedTargets = getComponentsTargetsByComponent(componentsStore, componentsStore[editingComponentId]);
  } else {
    // When the component is a new one.
    allowedTargets = getComponentsTargetsByPosition(componentsStore, componentType, editingComponentId);
  }

  if (selectedTarget !== '' && componentsStore[selectedTarget] && allowedTargets.indexOf(selectedTarget) === -1) {
    allowedTargets.unshift(selectedTarget);
  }

  return allowedTargets.map(key => {
    return {
      value: key,
      label: `${componentsStore[key].name} - ${componentsStore[key].label}`,
    };
  });
}
