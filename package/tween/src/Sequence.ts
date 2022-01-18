/**
 * 获取序列号
 */
export default class Sequence {
	private static _nextId = 0

	static nextId(): number {
		return Sequence._nextId++
	}
}
