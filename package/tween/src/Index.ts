

import Easing from './Easing'
import Group from './Group'
import Interpolation from './Interpolation'
import now from './Now'
import Sequence from './Sequence'
import Tween from './Tween'
import VERSION from './Version'
import { mainGroup } from './mainGroup'

const nextId = Sequence.nextId


const TWEEN = mainGroup


const getAll = TWEEN.getAll.bind(TWEEN)
const removeAll = TWEEN.removeAll.bind(TWEEN)
const add = TWEEN.add.bind(TWEEN)
const remove = TWEEN.remove.bind(TWEEN)
const update = TWEEN.update.bind(TWEEN)



export { Easing, Group, Interpolation, now, Sequence, nextId, Tween, VERSION, getAll, removeAll, add, remove, update }

const exports = {
	Easing,
	Group,
	Interpolation,
	now,
	Sequence,
	nextId,
	Tween,
	VERSION,
	getAll,
	removeAll,
	add,
	remove,
	update,
}

export default exports
