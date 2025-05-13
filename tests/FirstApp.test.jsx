describe('Pruebas en <FirstApp />', () => {
  test('debe de hacer match con el snapshot', () => {
    const title = 'Hola, soy Anderson';
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });
});
