export default class extends think.controller.base {

	async indexAction() {
		let id = this.get('id');
		this.assign('id', id);
		return this.display();
	}
}