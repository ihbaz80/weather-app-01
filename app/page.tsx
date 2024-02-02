import ReadMap from './components/ReadMap/ReadMap'
import ColorReader from './components/ColorReader/ColorReader'
import DataReader from './components/DataReader/DataReader'
import Header from './components/Header'

//<ColorReader place='Gunung Pulai' location={{x:411, y:413}}></ColorReader>
//<ColorReader place='Gunung Berlumut' location={{x:423, y:491}}></ColorReader>
//<ColorReader place='Gunung Pulai' location={{x:411, y:413}}></ColorReader>
   //<DataReader place='Gunung Pulai'  location={{x:411, y:413}}></DataReader>
      //   <DataReader place='Gunung Pulai'  location={{x:411, y:413}}></DataReader>
export default function Home() {
  return (
    <main>
      <Header></Header>
      <h3 className="text-3xl font-bold-underline">Weather Reading System</h3>      
      <ColorReader place='Gunung Pulai' location={{x:411, y:413}}></ColorReader>
      <DataReader place='Gunung Pulai'  location={{x:411, y:413}}></DataReader>
    </main>
  )
}
