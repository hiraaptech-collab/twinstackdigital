<?php

namespace App\Mail;

use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Support\Facades\URL;

class ContactInquiryMail extends Mailable
{
    public $submission;

    public function __construct($submission)
    {
        $this->submission = $submission;
    }

    public function build()
    {
        $status = $this->submission->status ?? 'new';
        $notes = $this->submission->notes ?? '';

        return $this->subject('New Twin Stack Digital Inquiry - ' . $this->submission->name)
            ->from($this->submission->email, $this->submission->name)
            ->markdown('emails.contact_inquiry', [
                'submission' => $this->submission,
                'status' => $status,
                'notes' => $notes,
            ])
            ->with([
                'appName' => config('app.name', 'Twin Stack Digital'),
                'supportEmail' => config('mail.from.address', 'hello@example.com'),
            ]);
    }
}