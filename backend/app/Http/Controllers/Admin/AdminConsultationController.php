<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ConsultationSlot;
use Illuminate\Http\Request;

class AdminConsultationController extends Controller
{
    public function index()
    {
        $slots = ConsultationSlot::orderBy('date')->orderBy('time_slot')->get();
        return view('admin.consultations.index', compact('slots'));
    }

    public function create()
    {
        return view('admin.consultations.create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'date'         => 'required|date|after_or_equal:today',
            'time_slot'    => 'required|string|max:20',
            'is_available' => 'boolean',
            'max_bookings' => 'nullable|integer|min:1',
        ]);

        $data['is_available'] = $request->boolean('is_available', true);
        $data['max_bookings'] = $data['max_bookings'] ?? 1;

        ConsultationSlot::create($data);

        return redirect()->route('admin.consultations.index')->with('success', 'Slot created.');
    }

    public function toggle(ConsultationSlot $consultation)
    {
        $consultation->update(['is_available' => !$consultation->is_available]);
        return back()->with('success', 'Slot availability toggled.');
    }

    public function destroy(ConsultationSlot $consultation)
    {
        $consultation->delete();
        return back()->with('success', 'Slot deleted.');
    }
}
