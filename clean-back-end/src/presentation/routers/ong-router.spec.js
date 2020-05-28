const OngRouter = require('./ong-router')

class OngUseCaseSpy {
  constructor () {
    this.calledTimes = 0
  }

  async getOngs () {
    this.wasCalled = true
    this.calledTimes++
    return [{}]
  }
}

const makeSut = () => {
  const ongUseCaseSpy = new OngUseCaseSpy()
  const sut = new OngRouter(ongUseCaseSpy)
  return { sut, ongUseCaseSpy }
}

describe('Ong Router', () => {
  describe('index()', () => {
    test('Should call getOngs() from OngUseCase', async () => {
      const { sut, ongUseCaseSpy } = makeSut()
      await sut.index()

      expect(ongUseCaseSpy.wasCalled).toBe(true)
      expect(ongUseCaseSpy.calledTimes).toBe(1)
    })
  })
})
