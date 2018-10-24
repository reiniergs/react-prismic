Only vegetables but not the green ones:

    <Prismic repo="react-prismic-cms">
        <QueryMulti component={ExampleCard}>
            <QueryAt path="document.type" value="vegetables" />
            <QueryNot path="document.tags" value={['green']} />
        </QueryMulti>
    </Prismic>
