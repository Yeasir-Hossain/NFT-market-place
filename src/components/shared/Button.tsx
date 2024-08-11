import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	label?: string | React.ReactNode;
	startIcon?: React.ReactNode;
	endIcon?: React.ReactNode;
	className?: string;
}

/**
 * A reusable button component for React applications.
 *
 * @param title - The text to display inside the button. Default is an empty string.
 * @param startIcon - The icon to display at the start of the button. Default is null.
 * @param endIcon - The icon to display at the end of the button. Default is null.
 * @param disabled - Whether the button is disabled. Default is false.
 * @param type - The type of the button. Default is 'button'.
 * @param className - Additional CSS classes to apply to the button. Default is an empty string.
 * @param rest - Additional props to pass to the button element, such as, handler funtions.
 * @returns - A React button component.
 */
export default function Button({
	label = '',
	startIcon = null,
	endIcon = null,
	disabled = false,
	type = 'button',
	className = '',
	...rest
}: ButtonProps) {
	return (
		<button
			type={type}
			disabled={disabled}
			className={`rounded-full transition-all duration-500 ease-in-out text-sm xl:text-base ${className}`}
			{...rest}
		>
			{startIcon && startIcon}
			{label && label}
			{endIcon && endIcon}
		</button>
	);
}
