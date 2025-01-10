export const checkAccess = (
	access: [string | number | null] | undefined,
	userRole: string | number | null
) => access?.includes(userRole)
