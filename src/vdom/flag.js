const NODE_FLAG = {
  ELEMENT: 1,
  TEXT: 1 << 1
}

const CHILD_FLAG = {
  NO_CHILD: 1,
  SINGLE_CHILD: 1 << 1,
  NO_KEY_CHILD: 1 << 2,
  KEY_CHILD: 1 << 3
}

CHILD_FLAG.MULTI_CHILD = CHILD_FLAG.NO_KEY_CHILD | CHILD_FLAG.KEY_CHILD

export { NODE_FLAG, CHILD_FLAG }