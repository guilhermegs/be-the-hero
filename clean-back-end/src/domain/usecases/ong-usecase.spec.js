class OngUseCase {
  constructor (loadOngsRepository) {
    this.loadOngsRepository = loadOngsRepository
  }

  async getOngs () {
    return await this.loadOngsRepository.load()
  }
}

class LoadOngsRepositorySpy {
  constructor () {
    this.calledTimes = 0
    this.ongs = [{
      id: 1,
      name: 'ANY ONG'
    }]
  }

  async load () {
    this.wasCalled = true
    this.calledTimes++
    return this.ongs
  }
}

describe('Ong UseCase', () => {
  test('Should call LoadOngsRepository', async () => {
    const loadOngsRepositorySpy = new LoadOngsRepositorySpy()
    const sut = new OngUseCase(loadOngsRepositorySpy)
    await sut.getOngs()
    expect(loadOngsRepositorySpy.wasCalled).toBe(true)
    expect(loadOngsRepositorySpy.calledTimes).toBe(1)
  })

  test('Should retun the same content returned by LoadOngsRepository', async () => {
    const loadOngsRepositorySpy = new LoadOngsRepositorySpy()
    const sut = new OngUseCase(loadOngsRepositorySpy)
    const ongs = await sut.getOngs()
    expect(loadOngsRepositorySpy.ongs).toEqual(ongs)
  })
})
