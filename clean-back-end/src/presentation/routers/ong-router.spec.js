class OngRouter {
  constructor (ongUseCase) {
    this.ongUseCase = ongUseCase
  }

  async index () {
    const ongs = await this.ongUseCase.getOngs()
    return ongs
  }
}

class OngUseCaseSpy {
  constructor () {
    this.times = 0
  }

  async getOngs () {
    this.wasCalled = true
    this.times++
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
      expect(ongUseCaseSpy.times).toBe(1)
    })
  })
})
