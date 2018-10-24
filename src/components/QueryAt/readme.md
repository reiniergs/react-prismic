vegetables:

    <Prismic repo="react-prismic-cms">
        <QueryAt path="document.type" value="vegetables" component={VegetableList} />
    </Prismic>

red vegetables:

    <Prismic repo="react-prismic-cms">
        <QueryAt path="document.tags" value={['red']} component={VegetableList} />
    </Prismic>
