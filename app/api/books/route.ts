import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    const title = formData.get('title') as string
    const author = formData.get('author') as string
    const series = formData.get('series') as string
    const volume = formData.get('volume') as string
    const genre = formData.get('genre') as string
    const language = formData.get('language') as string
    const rating = formData.get('rating') ? parseInt(formData.get('rating') as string) : null
    const spicy_rating = formData.get('spicy_rating') ? parseInt(formData.get('spicy_rating') as string) : null
    const emotion_rating = formData.get('emotion_rating') ? parseInt(formData.get('emotion_rating') as string) : null
    const comment = formData.get('comment') as string
    const file = formData.get('file') as File | null

    if (!title) {
      return NextResponse.json({ error: 'Le titre est obligatoire' }, { status: 400 })
    }

    // Create Supabase client with service role key
    const supabase = createClient(supabaseUrl, supabaseServiceKey, {
      auth: { persistSession: false }
    })

    // Get or create a default library
    let { data: libraries } = await supabase
      .from('libraries')
      .select('id')
      .limit(1)

    let library_id = libraries?.[0]?.id

    if (!library_id) {
      // Create a default library if none exists
      const { data: newLibrary, error: libError } = await supabase
        .from('libraries')
        .insert({
          name: 'Ma Bibliothèque',
          owner_id: null
        })
        .select('id')
        .single()

      if (libError || !newLibrary) {
        console.error('Library creation error:', libError)
        return NextResponse.json({ error: `Erreur bibliothèque: ${libError?.message || 'Inconnu'}` }, { status: 400 })
      }
      library_id = newLibrary.id
    }

    // Insert book
    const { data: book, error: bookError } = await supabase
      .from('books')
      .insert({
        library_id,
        title,
        author: author || null,
        series: series || null,
        volume: volume || null,
        genre: genre || null,
        language: language || null,
        file_type: file ? (file.name.endsWith('.pdf') ? 'pdf' : 'epub') : null
      })
      .select('id')
      .single()

    if (bookError || !book) {
      console.error('Book creation error:', bookError)
      return NextResponse.json({ error: `Erreur lors de la création du livre: ${bookError?.message}` }, { status: 400 })
    }

    // Insert book review if ratings are provided
    if (rating !== null || comment) {
      // For now, use a generic user_id - in production, get this from auth
      const generic_user_id = 'ffffffff-ffff-ffff-ffff-ffffffffffff'
      
      const { error: reviewError } = await supabase
        .from('book_reviews')
        .insert({
          book_id: book.id,
          user_id: generic_user_id,
          rating,
          spicy_rating,
          emotion_rating,
          comment: comment || null
        })

      if (reviewError) {
        console.error('Review error:', reviewError)
        // Don't fail if review fails, book is already created
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Livre ajouté avec succès',
      bookId: book.id
    })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Erreur serveur lors de l\'ajout du livre' },
      { status: 500 }
    )
  }
}
