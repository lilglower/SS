/*//===
	State Management 
*///===

import ee from 'event-emitter'

class state {
	constructor(){
		this.state = {
			loading : true,
			inGame : false,
			width: window.innerWidth || document.body.clientWidth,
			height: window.innerHeight || document.body.clientHeight
		}
	}

	get(key){
		if(key in this.state)
			return this.state[key];
		else throw new Error(`Key ${key} does not exist in the state.`)
	}

	set(key, value){
		this.state[key] = value;
		this.emit(key, value)
		this.refresh();
	}

	refresh(){
		this.emit("stateChange", this.state)
	}

	getState(){
		return this.state
	}
}

ee(state.prototype)

export default new state;