export function ExtractValueFromInputEvent(e: React.FormEvent<HTMLInputElement>): string {
    const { value } = e.target as HTMLInputElement;
    return value;
}
