const OngUseCase = require('./ong-usecase')

const makeSut = () => {
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

  const loadOngsRepositorySpy = new LoadOngsRepositorySpy()
  const sut = new OngUseCase(loadOngsRepositorySpy)
  return {
    sut,
    loadOngsRepositorySpy
  }
}

const makeLoadOngsRepositorySpyWithError = () => {
  class LoadOngsRepositorySpy {
    async load () {
      throw new Error()
    }
  }
  return new LoadOngsRepositorySpy()
}

describe('Ong UseCase', () => {
  test('Should call LoadOngsRepository', async () => {
    const { sut, loadOngsRepositorySpy } = makeSut()
    await sut.getOngs()
    expect(loadOngsRepositorySpy.wasCalled).toBe(true)
    expect(loadOngsRepositorySpy.calledTimes).toBe(1)
  })

  test('Should retun the same content returned by LoadOngsRepository', async () => {
    const { sut, loadOngsRepositorySpy } = makeSut()
    const ongs = await sut.getOngs()
    expect(loadOngsRepositorySpy.ongs).toEqual(ongs)
  })

  test('Should throw if LoadOngsRepository throws', async () => {
    const sut = new OngUseCase(makeLoadOngsRepositorySpyWithError())
    const promise = sut.getOngs()
    expect(promise).rejects.toThrow()
  })
})
