@component('mail::layout', ['heading' => 'New Twin Stack Digital Inquiry', 'canary' => true])
<div class="p-4">
    <h2>You have received a new inquiry from the website.</h2>

    <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; margin: 0 auto;">
        <tr>
            <td>
                <p><strong>Name:</strong> {{ $submission->name }}</p>
                <p><strong>Email:</strong> {{ $submission->email }}</p>
                @if($submission->phone)
                <p><strong>Phone:</strong> {{ $submission->phone }}</p>
                @endif
                <p><strong>Service:</strong> {{ $submission->service }}</p>
                @if($submission->budget)
                <p><strong>Budget:</strong> {{ $submission->budget }}</p>
                @endif
                <p><strong>Message:</strong> {{ $submission->message }}</p>
            </td>
        </tr>
        <tr>
            <td style="padding-top:2rem; border-top:1px solid #e0e0e0; font-size:0.85rem; color:#666;">
                <p>Inquiry status: {{ ucfirst($status ?? 'new') }}</p>
                @if($notes)
                <p><strong>Notes:</strong> {{ $notes }}</p>
                @endif
                <p><small>Sent at {{ now()->format('M d, Y H:i') }}</small></p>
            </td>
        </tr>
    </table>
</div>
@endif