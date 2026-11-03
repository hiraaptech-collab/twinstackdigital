@livewire('@error($message)')
{{-- Contact Inquiry Email Template --}}

<strong>New Twin Stack Digital Inquiry</strong>

<p><strong>Name:</strong> {{ $submission->name }}</p>
<p><strong>Email:</strong> {{ $submission->email }}</p>
@if($submission->phone)
<p><strong>Phone:</strong> {{ $submission->phone }}</p>
@endif
<p><strong>Service Interest:</strong> {{ ucfirst($submission->service) }}</p>
@if($submission->budget)
<p><strong>Budget Range:</strong> {{ $submission->budget }}</p>
@endif
<p><strong>Message:</strong> {{ $submission->message }}</p>

<p><strong>Submission Status:</strong> {{ ucfirst($status) }}</p>

@if($notes)
<p><strong>Private Notes:</strong> {{ $notes }}</p>
@endif

<hr />

<p><small>This inquiry was submitted via the Twin Stack Digital website contact form.</small></p>
<p><small>Submitted at: {{ now()->format('Y-m-d H:i:s') }}</small></p>