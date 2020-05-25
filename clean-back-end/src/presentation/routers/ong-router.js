module.exports = class OngRouter {
  constructor (ongUseCase) {
    this.ongUseCase = ongUseCase
  }

  async index () {
    const ongs = await this.ongUseCase.getOngs()
    return ongs
  }
}
