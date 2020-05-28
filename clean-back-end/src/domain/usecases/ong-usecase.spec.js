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
  }

  async load () {
    this.wasCalled = true
    this.calledTimes++
    return [{}]
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
})
