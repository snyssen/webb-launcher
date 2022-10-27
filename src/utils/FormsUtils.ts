export function ExtractValueFromInputEvent(e: InputEvent): string {
    const { value } = e.target as HTMLInputElement;
    return value;
}
