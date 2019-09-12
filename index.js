module.exports = function AfkBlocker(mod) { // KennyPHM
	mod.hook('C_UPDATE_AFK_STATUS', 1, event => {
		if(event.isAfk) return false;
	});
}