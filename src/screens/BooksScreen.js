import React from 'react'
import books from '../data/books'
import { Row, Col,Button, Table, Image} from 'react-bootstrap'
import Book from '../components/Book'

const BooksScreen = ({}) => {
    return (
        <>
        <div className="container py-4">
            <Row>
            <Col sm={6} style={{}}>
            <h1 className="heading1" style={{padding: '20px 0'}}>Study Material</h1>
            <p style={{fontSize: '20px'}}>Let us study things that are no more. It is necessary to understand them, if only to avoid them. You don't have to be great to start, but you have to start to be great. <br/>Download the app now to get free access to over a million books. </p>
            <Button href="" target="_blank" className="playstorebtn" size="lg"> Download </Button>
            </Col>
            <Col sm={6}>
             <Image className="py-3" src='/images/book.png' alt="..." fluid />
            </Col>
            </Row>
        </div>

        <div className="container bookscreen py-3" style={{marginTop: '30px'}}>
            <h1 className='heading2'>Most Downloaded</h1>
        <Row>
            {books.map((book)=>(
                <Col key={book._id} xs={6} md={4} lg={3} xl={2}>
                    <Book book={book} />
                </Col>
            ))}
        </Row>

        <h1  className='heading2' style={{paddingTop: '40px'}}>NCERT Class VIII-XII e-books</h1>
</div>
<div style={{background:'#475569', paddingBottom: '20px'}} >
    <div className="container">
        <Table striped bordered hover className="table-light" responsive="sm">
        <thead>
            <tr>
            <th style={{background: '#475569'}}>Class VIII</th>
            <th style={{background: '#475569'}}>Class IX</th>
            <th style={{background: '#475569'}}>Class X</th>
             </tr>
        </thead>
        <tbody>
             <tr>
            <td>Mathematics <a href="/images/myw3schoolsimage.jpg" download="demo.pdf" style={{float:'right'}}><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Download</a></td>
            <td>Mathematics<a href="/images/myw3schoolsimage.jpg" download="demo.pdf" style={{float:'right'}}><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Download</a></td>
            <td>Mathematics<a href="/images/myw3schoolsimage.jpg" download="demo.pdf" style={{float:'right'}}><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Download</a></td>
            </tr>
            <tr>
              <td>Science<a href="/images/myw3schoolsimage.jpg" download="demo.pdf" style={{float:'right'}}><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Download</a></td>
              <td>Science<a href="/images/myw3schoolsimage.jpg" download="demo.pdf" style={{float:'right'}}><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Download</a> </td>
              <td>Science<a href="/images/myw3schoolsimage.jpg" download="demo.pdf" style={{float:'right'}}><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Download</a> </td>
             </tr>
             <tr>
               <td>Our Past III part I - History<a href="/images/myw3schoolsimage.jpg" download="demo.pdf" style={{float:'right'}}><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Download</a></td>
               <td>India & Comtemprary World - History<a href="/images/myw3schoolsimage.jpg" download="demo.pdf" style={{float:'right'}}><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Download</a></td>
               <td>India & Contemporary World II - History <a href="/images/myw3schoolsimage.jpg" download="demo.pdf" style={{float:'right'}}><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Download</a></td>
             </tr>
             <tr>
               <td>Resourse & Development - Geogrophy<a href="/images/myw3schoolsimage.jpg" download="demo.pdf" style={{float:'right'}}><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Download</a></td>
               <td>Contemprary India - Geogrophy<a href="/images/myw3schoolsimage.jpg" download="demo.pdf" style={{float:'right'}}><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Download</a></td>
               <td>Contempropry India - Geogrophy<a href="/images/myw3schoolsimage.jpg" download="demo.pdf" style={{float:'right'}}><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Download</a></td>
             </tr>
             <tr>
               <td>Honey Dew - English<a href="/images/myw3schoolsimage.jpg" download="demo.pdf" style={{float:'right'}}><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Download</a></td>
               <td>Beehive - English Text<a href="/images/myw3schoolsimage.jpg" download="demo.pdf" style={{float:'right'}}><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Download</a></td>
               <td>First Flight - English Text <a href="/images/myw3schoolsimage.jpg" download="demo.pdf" style={{float:'right'}}><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Download</a></td>
             </tr>
             <tr>
               <td>Vasant - Hindi<a href="/images/myw3schoolsimage.jpg" download="demo.pdf" style={{float:'right'}}><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Download</a></td>
               <td>Sparsh - 2nd Lang. Hindi<a href="/images/myw3schoolsimage.jpg" download="demo.pdf" style={{float:'right'}}><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Download</a></td>
               <td>Sparsh -2nd Lang. Hindi <a href="/images/myw3schoolsimage.jpg" download="demo.pdf" style={{float:'right'}}><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Download</a></td>
             </tr>
             <tr>
               <td>Bharat Ki Khoj - Suppl. Hindi <a href="/images/myw3schoolsimage.jpg" download="demo.pdf" style={{float:'right'}}><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Download</a></td>
               <td>Sanchayan - Suppl. Hindi ( 2nd Lang.) <a href="/images/myw3schoolsimage.jpg" download="demo.pdf" style={{float:'right'}}><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Download</a></td>
               <td>Sanchayan - Suppl. Hindi ( 2nd Lang.) <a href="/images/myw3schoolsimage.jpg" download="demo.pdf" style={{float:'right'}}><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Download</a></td>
             </tr>
             <tr>
               <td>Ruchira III - Sanskrit <a href="/images/myw3schoolsimage.jpg" download="demo.pdf" style={{float:'right'}}><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Download</a></td>
               <td>Shemusi - Sanskrit <a href="/images/myw3schoolsimage.jpg" download="demo.pdf" style={{float:'right'}}><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Download</a></td>
               <td>Shemusi II - Sanskrit<a href="/images/myw3schoolsimage.jpg" download="demo.pdf" style={{float:'right'}}><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Download</a></td>
             </tr>
        </tbody>
        </Table>
        <Table striped bordered hover className="table-light" style={{marginBottom: '0'}}>
        <thead>
            <tr>
            <th style={{background: '#475569'}}>Class XI</th>
            <th style={{background: '#475569'}}>Class XII</th>
            </tr>
        </thead>
        <tbody>
             <tr>
            <td>Mathematics<a href="/images/myw3schoolsimage.jpg" download="demo.pdf" style={{float:'right'}}><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Download</a></td>
            <td>Mathematics Part I <a href="/images/myw3schoolsimage.jpg" download="demo.pdf" style={{float:'right'}}><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Download</a></td>
            </tr>
            <tr>
              <td>Biology<a href="/images/myw3schoolsimage.jpg" download="demo.pdf" style={{float:'right'}}><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Download</a></td>
              <td>Mathematics Part II<a href="/images/myw3schoolsimage.jpg" download="demo.pdf" style={{float:'right'}}><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Download</a></td>
             </tr>
             <tr>
              <td>Chemistry Part I<a href="/images/myw3schoolsimage.jpg" download="demo.pdf" style={{float:'right'}}><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Download</a></td>
              <td>Chemistry I<a href="/images/myw3schoolsimage.jpg" download="demo.pdf" style={{float:'right'}}><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Download</a> </td>
             </tr>
             <tr>
              <td>Chemistry Part II<a href="/images/myw3schoolsimage.jpg" download="demo.pdf" style={{float:'right'}}><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Download</a></td>
              <td>Chemistry II<a href="/images/myw3schoolsimage.jpg" download="demo.pdf" style={{float:'right'}}><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Download</a></td>
             </tr>
             <tr>
              <td>Physics Part I<a href="/images/myw3schoolsimage.jpg" download="demo.pdf" style={{float:'right'}}><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Download</a> </td>
              <td>Physics I <a href="/images/myw3schoolsimage.jpg" download="demo.pdf" style={{float:'right'}}><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Download</a></td>
             </tr>
             <tr>
              <td>Physics Part II<a href="/images/myw3schoolsimage.jpg" download="demo.pdf" style={{float:'right'}}><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Download</a></td>
              <td>Physics II<a href="/images/myw3schoolsimage.jpg" download="demo.pdf" style={{float:'right'}}><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Download</a></td>
             </tr>
             <tr>
              <td>Themes of World History<a href="/images/myw3schoolsimage.jpg" download="demo.pdf" style={{float:'right'}}><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Download</a></td>
              <td>Biology<a href="/images/myw3schoolsimage.jpg" download="demo.pdf" style={{float:'right'}}><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Download</a></td>
             </tr>
             <tr>
              <td>Indian Eco. Development<a href="/images/myw3schoolsimage.jpg" download="demo.pdf" style={{float:'right'}}><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Download</a> </td>
              <td>Thymes In Indian History Part I <a href="/images/myw3schoolsimage.jpg" download="demo.pdf" style={{float:'right'}}><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Download</a></td>
             </tr>

        </tbody>
        </Table>
        </div>
        </div>
        </>
    )
}

export default BooksScreen
