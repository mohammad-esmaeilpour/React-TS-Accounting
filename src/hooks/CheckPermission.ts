export const checkPermission = (
  requiredPermissions: any,
  userPermissions: any
) => {
  return Object.keys(requiredPermissions)?.every(
    (key) =>
      requiredPermissions[key] === "public" ||
      (userPermissions[key] &&
        userPermissions[key].includes(requiredPermissions[key]))
  );
};
