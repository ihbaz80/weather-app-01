import ReadMap from './components/ReadMap/ReadMap'
import ColorReader from './components/ColorReader/ColorReader'

export default function Home() {
  return (
    <main>
      <h1 className="text-lg">Weather Reading System</h1>
      <ColorReader place='Gunung Pulai' location={{x:457, y:403}}></ColorReader>
      <ColorReader place='Gunung Berlumut' location={{x:423, y:491}}></ColorReader>
    </main>
  )
}
