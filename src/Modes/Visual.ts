import {Mode} from './Mode'
import {Map} from '../Mapper';
import {ActionMode} from '../Actions/Mode';

export class ModeVisual extends Mode {
	name = 'VISUAL';

	private maps: Map[] = [
		{ keys: 'escape', command: ActionMode.toNormal },
	];

	constructor() {
		super();

		this.maps.forEach(map => {
			this.mapper.map(map.keys, map.command, map.args);
		});
	}
}