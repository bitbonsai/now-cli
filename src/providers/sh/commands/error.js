// @flow
type NowErrorArgs<T, M> = {
  code: T,
  meta?: M,
  message?: string
}

export class NowError<T, M = {}> extends Error {
  meta: M;
  code: T;

  constructor({ code, message, meta }: NowErrorArgs<T, M>) {
    super(message)
    this.code = code;
    if (meta) {
      this.meta = meta;
    }
  }
}