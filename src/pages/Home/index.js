import React from 'react'
import { createUseStyles } from 'react-jss'
import Layout from '../../components/Layout'

const useStyles = createUseStyles({
    demo: {
        margin: {
            top: 32
        },
        '& p': {
            margin: {
                bottom: 16
            }
        }
    }
})

const Home = () => {

    const classes = useStyles()

    return (
        <Layout>
            <h1>Dashboard.</h1>
            <div className={classes.demo}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum recusandae illum provident dolorum porro minus, hic architecto, magnam similique debitis itaque cum, tempora distinctio ad ducimus excepturi asperiores pariatur delectus!</p>
                <p>Ipsa non qui deleniti consequuntur ratione voluptatibus ea nostrum libero omnis recusandae deserunt, eaque nulla adipisci neque beatae ullam quod at modi possimus labore perspiciatis cum officia? Non, corrupti quaerat!</p>
                <p>Nesciunt sunt facere earum nobis, eum ab cum doloremque libero soluta voluptas, neque iusto blanditiis similique assumenda, cupiditate non tempora harum vitae nisi eligendi? Id recusandae magnam labore sunt quia?</p>
                <p>Sint, accusamus facere odit consequuntur aspernatur velit reprehenderit deleniti dolores nam distinctio quasi cumque sapiente ipsam maxime excepturi nobis voluptatibus! Ad maiores accusamus est nihil sequi cupiditate consectetur! Ullam, aperiam?</p>
                <p>Sunt, deleniti tenetur. Nisi laborum odit aliquid. Voluptatum modi beatae odit laborum iste. Ullam alias, magnam consequuntur vel omnis neque facere id tempore accusamus beatae corporis similique aspernatur! Aliquam, quibusdam?</p>
                <p>Laudantium corrupti nobis quasi et, ducimus velit asperiores pariatur est iste repellat facilis ab quas, dolorem, porro fugit possimus molestias molestiae. Ducimus ipsum repellat ratione quia accusamus quas numquam a.</p>
                <p>Mollitia rerum rem eveniet sint fugit aperiam nemo sed laboriosam numquam iusto quas eos esse nihil earum, sapiente similique excepturi ex distinctio odit autem adipisci! Aliquid blanditiis atque animi similique!</p>
                <p>Quasi, soluta sed in, nihil debitis ab eius cumque, facilis magnam beatae dolorum qui ut fugiat non exercitationem aspernatur! Ipsum dolore voluptas soluta quo eos perspiciatis officia rerum odit asperiores?</p>
                <p>Praesentium corporis esse voluptatibus suscipit excepturi corrupti, magnam, quis in earum modi dicta. Deleniti sequi possimus eos, laborum eveniet adipisci assumenda molestiae exercitationem quam. Provident, ad! Eos reiciendis aliquam fugit.</p>
                <p>Officiis, dolores excepturi? Consequuntur alias dolores ut officiis! Et iusto commodi eos obcaecati incidunt consequatur, architecto velit debitis tempora cumque veritatis soluta a voluptates delectus harum libero molestias unde perferendis.</p>
            </div>
        </Layout>
    )
}

export default Home
