export default function (params: { order: number; prefix: string }) {
  let result = `--${params.prefix}`;

  if (params.order !== null && params.order !== undefined) {
    result += `-${params.order}`;
  }

  return result;
}
