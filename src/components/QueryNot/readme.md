not vegetables:

    <Prismic repo="react-prismic-cms">
        <QueryNot path="document.type" value="vegetables" component={VegetableList} />
    </Prismic>

not green vegetables:

    <Prismic repo="react-prismic-cms">
        <QueryNot path="document.tags" value={['green']} component={VegetableList} />
    </Prismic>
