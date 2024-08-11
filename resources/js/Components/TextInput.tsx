import { forwardRef, useEffect, useImperativeHandle, useRef, InputHTMLAttributes } from 'react';

// Mendefinisikan tipe untuk props komponen Anda
type Props = InputHTMLAttributes<HTMLInputElement> & {
    type?: 'text' | 'email' | 'password' | 'number' | 'file';
    name: string;
    value?: string | number;
    defaultValue?: string | number;
    className?: string;
    variant?: 'primary' | 'error' | 'primary-outline';
    autoComplete?: string; // Perbaikan typo dari autoComplate menjadi autoComplete
    required?: boolean;
    isFocused?: boolean;
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

// Menggunakan tipe Props dalam komponen Anda
export default forwardRef<HTMLInputElement, Props>(function TextInput(
    {
        type = 'text',
        name,
        defaultValue,
        className = '',
        variant = 'primary',
        autoComplete,
        required,
        isFocused = false,
        placeholder,
        handleChange,
        isError,
        ...props
    },
    ref
) {
    const localRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <input
            {...props}
            type={type}
            name={name}
            defaultValue={defaultValue}
            className={
                `rounded-2xl bg-form-bg py-[13px] px-7 w-full ${isError && 'input-error'} input-${variant} ` +
                className
            }
            ref={localRef}
            placeholder={placeholder}
            autoComplete={autoComplete}
            required={required}
            onChange={handleChange}
        />
    );
});
