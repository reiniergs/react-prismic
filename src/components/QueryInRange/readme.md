fruits between $2 and $10:

    const value = {
        lowerLimit: 2,
        upperLimit: 10,
    };

    <div>
        <GlobalHeader title="Fruits between $2 and $10" />
        <Prismic repo="react-prismic-cms">
            <QueryInRange path="my.fruits.price" value={value} component={ExampleCard} />
        </Prismic>
    </div>