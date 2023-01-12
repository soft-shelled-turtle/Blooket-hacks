var hack = Object.values(document.querySelector('#app > div > div'))[1].children[1]['_owner'].stateNode;

function findByProp(find) {
	return Object.values(webpackJsonp.push([
			[],
			{
				['']: (_, a, b) => {
					a.cache = b.c;
				}
			},
			[
				['']
			],
		]).cache)
		.find((x) => {
			if (x.exports && x.exports.a && x.exports.a[find]) {
				return x.exports.a;
			}
		})
		.exports.a;
}
hack.state.unlocks = Object.keys(findByProp("UFO"));
hack.forceUpdate();