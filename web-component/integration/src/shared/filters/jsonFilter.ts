export default function json(input: object): string {
  return JSON.stringify(input, null, 2);
}
