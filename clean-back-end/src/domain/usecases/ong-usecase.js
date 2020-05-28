module.exports = class OngUseCase {
  constructor (loadOngsRepository) {
    this.loadOngsRepository = loadOngsRepository
  }

  async getOngs () {
    return await this.loadOngsRepository.load()
  }
}
