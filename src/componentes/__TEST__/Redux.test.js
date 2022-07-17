import financesReducer,{obtenerDataAccion} from '../../redux/FinancesDucks'

const dataInicial = {
    array: [],
    offset: 0,
    limit: 30
}


describe('Redux Ducks',() => {
    it('not undefined', () => {
        const type='GET_DATA';
        const action={type};
        const state =dataInicial
        expect(financesReducer(state, action)).not.toEqual(undefined)
      })
      it('return objet', () => {
        const type='GET_DATA';
        const action={type};
        const state =dataInicial
         const result =financesReducer(state, action);
        expect(result).toBeInstanceOf(Object)
      })
      it('return not Array', () => {
        const type='GET_DATA';
        const action={type};
        const state =dataInicial
         const result =financesReducer(state, action);
        expect(result).not.toBeInstanceOf(Array)
      })


});


describe('acction', () => {
    it('Its objet ', async() => {
          const result =  obtenerDataAccion()
          expect(result).toBeInstanceOf(Object)

    });
    it('It is not  Array ', async() => {
        const result =  obtenerDataAccion()
        expect(result).not.toBeInstanceOf(Array)

  });
});
