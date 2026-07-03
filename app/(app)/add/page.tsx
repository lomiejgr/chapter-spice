'use client'

import { useState } from 'react'

export default function AddBook() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    series: '',
    volume: '',
    genre: '',
    language: '',
    rating: '',
    spicy_rating: '',
    emotion_rating: '',
    comment: '',
    file: null as File | null
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFormData(prev => ({ ...prev, file: e.target.files![0] }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const formDataToSend = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null && value !== '') {
          formDataToSend.append(key, value as string | Blob)
        }
      })

      const response = await fetch('/api/books', {
        method: 'POST',
        body: formDataToSend
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de l\'ajout du livre')
      }

      setMessage('Livre ajouté avec succès!')
      setFormData({
        title: '',
        author: '',
        series: '',
        volume: '',
        genre: '',
        language: '',
        rating: '',
        spicy_rating: '',
        emotion_rating: '',
        comment: '',
        file: null
      })
    } catch (error) {
      setMessage(`Erreur: ${error instanceof Error ? error.message : 'Erreur inconnue'}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-4 rounded-[2rem] bg-white p-6 shadow-soft">
      <h2 className="text-4xl font-black">Ajouter un livre</h2>
      
      {message && (
        <div className={`p-3 rounded-2xl ${message.includes('Erreur') ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
          {message}
        </div>
      )}

      {['title', 'author', 'series', 'volume', 'genre', 'language'].map(field => (
        <input
          key={field}
          type="text"
          name={field}
          value={formData[field as keyof typeof formData] as string}
          onChange={handleChange}
          className="w-full rounded-2xl border p-3"
          placeholder={field === 'title' ? 'Titre' : field === 'author' ? 'Auteur' : field === 'series' ? 'Série' : field === 'volume' ? 'Tome' : field === 'genre' ? 'Genre' : 'Langue'}
        />
      ))}

      <input
        type="file"
        name="file"
        accept=".epub,.pdf"
        onChange={handleFileChange}
        className="w-full rounded-2xl border p-3"
      />

      <div className="grid gap-3 md:grid-cols-3">
        <input
          type="number"
          name="rating"
          min="0"
          max="5"
          value={formData.rating}
          onChange={handleChange}
          className="rounded-2xl border p-3"
          placeholder="Note /5"
        />
        <input
          type="number"
          name="spicy_rating"
          min="0"
          max="5"
          value={formData.spicy_rating}
          onChange={handleChange}
          className="rounded-2xl border p-3"
          placeholder="Spicy /5"
        />
        <input
          type="number"
          name="emotion_rating"
          min="0"
          max="5"
          value={formData.emotion_rating}
          onChange={handleChange}
          className="rounded-2xl border p-3"
          placeholder="Émotion 😭 /5"
        />
      </div>

      <textarea
        name="comment"
        value={formData.comment}
        onChange={handleChange}
        className="h-32 w-full rounded-2xl border p-3"
        placeholder="Commentaire"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-spice py-4 font-black text-white disabled:opacity-50"
      >
        {loading ? 'Enregistrement...' : 'Enregistrer'}
      </button>
    </form>
  )
}
